import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavitemsComponent } from './sidenavitems.component';

describe('SidenavitemsComponent', () => {
  let component: SidenavitemsComponent;
  let fixture: ComponentFixture<SidenavitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
