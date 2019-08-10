import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevicesComponent } from './sevices.component';

describe('SevicesComponent', () => {
  let component: SevicesComponent;
  let fixture: ComponentFixture<SevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
