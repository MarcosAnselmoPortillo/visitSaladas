import{newSpecPage}from"@stencil/core/testing";import{h}from"@stencil/core";import{PrestoSearchBar}from"../presto-search-bar";describe("presto-search-bar",(()=>{it("renders",(async()=>{const e=await newSpecPage({components:[PrestoSearchBar],template:()=>h("presto-search-bar",null)});expect(e.root).toEqualHtml("\n    <presto-search-bar></presto-search-bar>\n    ")}))}));