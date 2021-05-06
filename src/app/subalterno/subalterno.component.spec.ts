import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubalternoComponent } from './subalterno.component';

describe('SubalternoComponent', () => {
  let component: SubalternoComponent;
  let fixture: ComponentFixture<SubalternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubalternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubalternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
