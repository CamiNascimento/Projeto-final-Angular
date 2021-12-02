import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopitionComponent } from './adopition.component';

describe('AdopitionComponent', () => {
  let component: AdopitionComponent;
  let fixture: ComponentFixture<AdopitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
