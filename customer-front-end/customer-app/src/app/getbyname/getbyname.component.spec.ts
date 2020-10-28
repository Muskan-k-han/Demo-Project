import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbynameComponent } from './getbyname.component';

describe('GetbynameComponent', () => {
  let component: GetbynameComponent;
  let fixture: ComponentFixture<GetbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
