import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProtocolComponent } from './add-protocol.component';

describe('AddProtocolComponent', () => {
  let component: AddProtocolComponent;
  let fixture: ComponentFixture<AddProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
