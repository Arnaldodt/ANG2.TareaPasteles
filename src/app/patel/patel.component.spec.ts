import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatelComponent } from './patel.component';

describe('PatelComponent', () => {
  let component: PatelComponent;
  let fixture: ComponentFixture<PatelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
