import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSensorComponent } from './add-sensor.component';

describe('AddSensorComponent', () => {
  let component: AddSensorComponent;
  let fixture: ComponentFixture<AddSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
