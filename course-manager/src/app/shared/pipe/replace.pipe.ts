import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'  
})
export class ReplacePipe implements PipeTransform {

    transform(valor: string, char:string, charReplace:string ){
        return valor.replace(char, charReplace);
    }
}