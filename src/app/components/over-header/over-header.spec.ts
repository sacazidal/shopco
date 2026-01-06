import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverHeaderComponent } from './over-header';

describe('OverHeader', () => {
  let component: OverHeaderComponent;
  let fixture: ComponentFixture<OverHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
