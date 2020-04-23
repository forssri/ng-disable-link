import { Directive, OnChanges, Input, HostBinding, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[ngDisableLink]'
})
export class DisableLinkDirective implements OnChanges {
  @Input('ngDisableLink') disabled: boolean;
  @Input() href: string;
  @HostBinding('attr.href') hrefAttr;
  @HostBinding('attr.aria-disabled') ariaDisabled: boolean;

  constructor(private sn: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setHref();
    this.setDisabled();
  }

  setHref() {
    this.hrefAttr = this.disabled
      ? this.sn.bypassSecurityTrustUrl('javascript:void(0)')
      : this.href;
  }

  setDisabled() {
    this.ariaDisabled = this.disabled;
  }
}
