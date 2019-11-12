import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorgressBarComponent } from './porgress-bar.component';

describe('PorgressBarComponent', () => {
  let component: PorgressBarComponent;
  let fixture: ComponentFixture<PorgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
