import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsMenuComponent } from './als-menu.component';

describe('AlsMenuComponent', () => {
  let component: AlsMenuComponent;
  let fixture: ComponentFixture<AlsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
