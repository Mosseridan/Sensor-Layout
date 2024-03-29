import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGatewayComponent } from './add-gateway.component';

describe('AddGatewayComponent', () => {
  let component: AddGatewayComponent;
  let fixture: ComponentFixture<AddGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
