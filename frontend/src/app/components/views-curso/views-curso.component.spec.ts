import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsCursoComponent } from './views-curso.component';

describe('ViewsCursoComponent', () => {
  let component: ViewsCursoComponent;
  let fixture: ComponentFixture<ViewsCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
