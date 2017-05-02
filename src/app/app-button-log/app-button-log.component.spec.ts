import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppButtonLogComponent } from './app-button-log.component';

describe('AppButtonLogComponent', () => {
  let component: AppButtonLogComponent;
  let fixture: ComponentFixture<AppButtonLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppButtonLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppButtonLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
