import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Output() newItemAdded = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder, private itemService: ItemService) {
  }

  ngOnInit() {
    this.buildForm();
    this.form.valueChanges.subscribe(r => console.log(r));
  }

  buildForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  cancelClicked() {
    this.buildForm();
  }

  formSubmit() {
    if (this.form.valid) {
      const res = this.itemService.addNew(this.form.value.title, this.form.value.description);
      res.subscribe(res => {
        this.newItemAdded.emit();
        this.buildForm();
      });
    }
  }

}
