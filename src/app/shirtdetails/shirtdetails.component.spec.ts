import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtdetailsComponent } from './shirtdetails.component';

describe('ShirtdetailsComponent', () => {
  let component: ShirtdetailsComponent;
  let fixture: ComponentFixture<ShirtdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
