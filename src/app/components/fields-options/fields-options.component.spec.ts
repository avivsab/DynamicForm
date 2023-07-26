import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsOptionsComponent } from './fields-options.component';

describe('FieldsOptionsComponent', () => {
  let component: FieldsOptionsComponent;
  let fixture: ComponentFixture<FieldsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
