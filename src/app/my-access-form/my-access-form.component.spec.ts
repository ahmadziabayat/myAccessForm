import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccessFormComponent } from './my-access-form.component';

describe('MyAccessFormComponent', () => {
  let component: MyAccessFormComponent;
  let fixture: ComponentFixture<MyAccessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
