import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacetvComponent } from './spacetv.component';

describe('SpacetvComponent', () => {
  let component: SpacetvComponent;
  let fixture: ComponentFixture<SpacetvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacetvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
