import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsValidateCpfComponent } from './als-validate-cpf.component';

describe('AlsValidateCpfComponent', () => {
  let component: AlsValidateCpfComponent;
  let fixture: ComponentFixture<AlsValidateCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsValidateCpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsValidateCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
