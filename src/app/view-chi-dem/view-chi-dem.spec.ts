import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewChiDem } from './view-chi-dem';

describe('ViewChiDem', () => {
  let component: ViewChiDem;
  let fixture: ComponentFixture<ViewChiDem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChiDem],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChiDem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
