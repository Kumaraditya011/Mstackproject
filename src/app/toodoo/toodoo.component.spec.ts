import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodooComponent } from './toodoo.component';

describe('ToodooComponent', () => {
  let component: ToodooComponent;
  let fixture: ComponentFixture<ToodooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
