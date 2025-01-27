import {
  Directive,
  inject,
  numberAttribute,
  booleanAttribute,
  input,
  ElementRef,
  InputSignalWithTransform,
  effect
} from '@angular/core';
import { HIGHLIGHT_OPTIONS, HighlightJS, HighlightBase, LineNumbersOptions } from 'ngx-highlightjs';

@Directive({
  selector: '[highlight][lineNumbers], [highlightAuto][lineNumbers]'
})
export class HighlightLineNumbers {

  private readonly options: LineNumbersOptions = inject(HIGHLIGHT_OPTIONS)?.lineNumbersOptions;
  private readonly _hljs: HighlightJS = inject(HighlightJS);
  private readonly _highlight: HighlightBase = inject(HighlightBase);
  private readonly _nativeElement: HTMLElement = inject(ElementRef<HTMLElement>).nativeElement;

  readonly startFrom: InputSignalWithTransform<number, unknown> = input<number, unknown>(this.options?.startFrom, {
    transform: numberAttribute
  });

  readonly singleLine: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(this.options?.singleLine, {
    transform: booleanAttribute
  });

  constructor() {
    effect(() => {
      if (this._highlight.highlightResult()) {
        this.addLineNumbers();
      }
    });
  }

  private async addLineNumbers(): Promise<void> {
    // Add line numbers
    await this._hljs.lineNumbersBlock(this._nativeElement, {
      startFrom: this.startFrom(),
      singleLine: this.singleLine()
    });
    // If lines count is 1, the line numbers library will not add numbers
    if (this._nativeElement.firstElementChild?.tagName.toUpperCase() === 'TABLE') {
      this._nativeElement.classList.add('hljs-line-numbers');
    } else {
      this._nativeElement.classList.remove('hljs-line-numbers');
    }
  }
}
