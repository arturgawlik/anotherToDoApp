import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingItemsComponent } from './existing-items.component';

describe('ExistingItemsComponent', () => {
  let component: ExistingItemsComponent;
  let fixture: ComponentFixture<ExistingItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
