import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'nxt-sortablejs';
import { SortableFormArrayComponent } from './sortable-form-array.component';

describe('SortableFormArrayComponent', () => {
  let component: SortableFormArrayComponent;
  let fixture: ComponentFixture<SortableFormArrayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SortableFormArrayComponent],
      imports: [
        SortablejsModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
