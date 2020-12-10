class Page
{
    constructor(content)
    {
        this.text = content;
    }
    print(){
        console.log(this.text);
    }
}

class NoteBook
{
    constructor()
    {
        this.pages = [];
    }
    addPage(text){
        var page = new Page(text);
        this.pages.push(page);
    }
    print(){
        for (let page of this.pages)
        {
            page.print();
        }
    }

}

var book = new NoteBook();
book.addPage("A");
book.addPage("B");
book.print();