import { NgModule } from '@angular/core';

import { JhipsterlabSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterlabSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterlabSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterlabSharedCommonModule {}
