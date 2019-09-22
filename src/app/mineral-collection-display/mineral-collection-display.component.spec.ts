import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralCollectionDisplayComponent } from './mineral-collection-display.component';

describe('MineralCollectionDisplayComponent', () => {
  let component: MineralCollectionDisplayComponent;
  let fixture: ComponentFixture<MineralCollectionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralCollectionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralCollectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
