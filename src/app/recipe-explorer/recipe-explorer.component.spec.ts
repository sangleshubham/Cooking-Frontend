import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeExplorerComponent } from './recipe-explorer.component';

describe('RecipeExplorerComponent', () => {
  let component: RecipeExplorerComponent;
  let fixture: ComponentFixture<RecipeExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
