import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'heroes-confirm-dialogs',
  templateUrl: './confirm-dialogs.component.html',
  styles: [
  ]
})
export class ConfirmDialogsComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onConfirmClick(): void
  {
    this.dialogRef.close(true)
  }
}
