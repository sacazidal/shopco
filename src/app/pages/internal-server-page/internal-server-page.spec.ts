import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalServerPage } from './internal-server-page';

describe('InternalServerPage', () => {
  let component: InternalServerPage;
  let fixture: ComponentFixture<InternalServerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalServerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalServerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
