import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'appBootstrap';
  productForm: FormGroup;
  closeResult: any;
  submitted = false;
  prouctList: any;
  isEdit = false;
  editId: any;
  message: any;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      productCode: ['', Validators.required],
      isActive: [false, Validators.required],
    })
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      console.log("res ==>", res)
      this.prouctList = res.data
    })
  }

  get f() { return this.productForm.controls; }

  open(content: any, isEdit: any) {
    if (!!isEdit && isEdit.id) {
      this.isEdit = true;
      this.editId = isEdit.id
      this.productForm.setValue({
        productName: isEdit.productName,
        description: isEdit.description,
        productCode: isEdit.productCode,
        isActive: isEdit.isActive,
      })
    } else {
      this.isEdit = false;
      this.editId = null;
      this.productForm.setValue({
        productName: '',
        description: '',
        productCode: '',
        isActive: false,
      })
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }
    if (this.productForm.value.productCode && !this.isEdit) {
      let check = this.prouctList.filter((item: any) => {
        return item.productCode === this.productForm.value.productCode
      });
      if (check.length > 0) {
        this.message = 'Product code is available please add new'

        setTimeout(() => {
          this.message = null;
        }, 3000);
        return;
      }
    }
    // TODO: Use EventEmitter with form value
    console.log(this.productForm.value.productCode);
    if (this.editId) {
      // edit 
      console.log("inside edit")
      this.productService.editProduct(this.productForm.value, this.editId).subscribe((res: any) => {
        this.getProducts()
        this.productForm.reset()
      })
    } else {
      // add 
      this.productService.addProduct(this.productForm.value).subscribe((res: any) => {
        this.getProducts()
        this.productForm.reset()
      })
    }
  }

}
