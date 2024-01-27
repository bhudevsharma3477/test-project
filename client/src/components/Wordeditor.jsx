import React from "react";
import {
    DocumentEditorContainerComponent, Inject, Toolbar, Print, SfdtExport, WordExport, TextExport,
    Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog,
    TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog,
    ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog,
    TableOptionsDialog, CellOptionsDialog, StylesDialog
  } from "@syncfusion/ej2-react-documenteditor";
  import '@syncfusion/ej2-base/styles/material.css';
  import '@syncfusion/ej2-react-documenteditor/styles/material.css';

const Wordeditor = () => {
    return(
        <>
        <DocumentEditorContainerComponent
        id="container"
        height={'500px'}
        enableToolbar={true}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        isReadOnly={false}
        enablePrint={true}
        enableSelection={true}
        enableEditor={true}
        enableEditorHistory={true}
        enableContextMenu={true}
        enableSearch={true}
        enableOptionsPane={true}
        enableBookmarkDialog={true}
        enableBordersAndShadingDialog={true}
        enableFontDialog={true}
        enableTableDialog={true}
        enableParagraphDialog={true}
        enableHyperlinkDialog={true}
        enableImageResizer={true}
        enableListDialog={true}
        enablePageSetupDialog={true}
        enableSfdtExport={true}
        enableStyleDialog={true}
        enableTableOfContentsDialog={true}
        enableTableOptionsDialog={true}
        enableTablePropertiesDialog={true}
        enableTextExport={true}
        enableWordExport={true}>
        <Inject
          services={[Print, Toolbar, SfdtExport, WordExport, TextExport, Selection, Search, Editor,
            ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog,
            BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog,
            BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog,
            TableOptionsDialog, CellOptionsDialog, StylesDialog]}
        />
      </DocumentEditorContainerComponent> 
        </>
    );
}

export default Wordeditor;