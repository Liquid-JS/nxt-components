import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SortablejsModule } from 'nxt-sortablejs';
import { SimpleSortableComponent } from './simple-sortable.component';

describe('SimpleSortableComponent', () => {
  let component: SimpleSortableComponent;
  let fixture: ComponentFixture<SimpleSortableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleSortableComponent],
      imports: [
        SortablejsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
