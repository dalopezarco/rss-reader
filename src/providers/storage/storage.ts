import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class StorageProvider {
  constructor(private nativeStorage: NativeStorage) {}
  getArticles() {
    return this.nativeStorage.getItem('articles').then(
      data => {
        if (data.articles) {
          return data.articles;
        } else {
          return undefined;
        }
      },
      error => console.error(error)
    );
  }

  setItem(item: string, value: any) {
    this.nativeStorage.setItem(item, value).then(() => console.log('Stored item!'), error => console.error('Error storing item', error));
  }
}
