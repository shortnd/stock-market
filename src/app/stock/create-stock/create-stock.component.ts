import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Stock } from 'src/app/model/stock';

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent {
  private stock: Stock;
  public stockForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    this.stock = new Stock('Test' + counter++, 'TST', 20, 10);
  }

  createForm() {
    this.stockForm = this.formBuilder.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  get name() {
    return this.stockForm.get('name');
  }

  get code() {
    return this.stockForm.get('code');
  }

  get price() {
    return this.stockForm.get('price');
  }

  loadStockFromServer() {
    this.stock = new Stock('Test' + counter++, 'TST', 20, 10);
    const stockFormModel = Object.assign({}, this.stock);
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    this.stockForm.setValue(stockFormModel);
  }

  resetForm() {
    this.stockForm.reset();
  }

  onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('Saving stock', this.stockForm.value);
  }
}
