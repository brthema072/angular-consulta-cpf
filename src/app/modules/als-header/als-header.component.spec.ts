import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsHeaderComponent } from './als-header.component';

describe('AlsHeaderComponent', () => {
  let component: AlsHeaderComponent;
  let fixture: ComponentFixture<AlsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
