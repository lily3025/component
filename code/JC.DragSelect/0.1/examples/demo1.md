# 基本示例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{path}}/res/default/test.css' rel='stylesheet' />
<style>
    .defDl > dd{
        border-bottom:1px solid #e2e3ea; 
    }

    table
    {  
      background-color: #FFFFFF!important;
      border-collapse: collapse!important;
      border: 1px solid #999999!important;
    }

    td
    , th
    {  
      border-top: 1px solid #999999!important;
      border-right: 1px solid #999999!important; 
      border-left: 1px solid #999999!important;
      border-bottom: 1px solid #999999!important; 
      border-collapse: collapse!important;
      padding: 2px!important;
    }

    td{
        height: 40px;
    }
</style>

<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.debug = true;
    });

    function cdsCallback( _items, _type, _ins ){
        var _selector = this;
        JC.log( 'cdsCallback', _items.length, JC.f.ts() );
    }

    function cdsSelectCallback( _items, _type, _ins ){
        var _selector = this;
        JC.log( 'cdsSelectCallback', _items.length, JC.f.ts() );
    }

    function cdsUnselectCallback( _items, _type, _ins ){
        var _selector = this;
        JC.log( 'cdsUnselectCallback', _items.length, JC.f.ts() );
    }
</script>

<dl class="defDl">
    <dt></dt>
    <dd>
        <div class="js_compDragSelect" 
            cdsConfig="/script.js_cdsConfig" 
            cdsRealtimeEffect="true" 
            cdsRealtimeClass="js_cdsRealtimeEffect" 
            cdsCallback="cdsCallback" 
            >
            <script type="text/template" class="js_cdsConfig">
                {
                    "items": {
                        "td.js_pos_canSelect": {
                            "addClass": "js_pos_selected"
                            , "removeClass": "js_pos_canSelect"
                            , "callback": cdsSelectCallback
                        }
                        , "td.js_pos_selected": {
                            "addClass": "js_pos_canSelect"
                            , "removeClass": "js_pos_selected"
                            , "callback": cdsUnselectCallback
                        }
                    }
                }
            </script>
            <table cellspacing='0' style="width:100%" class="unselectable" unselectable="on">
                <thead>
                    <tr>
                        <th>col 1</th>
                        <th>col 2</th>
                        <th>col 3</th>
                        <th>col 4</th>
                        <th>col 5</th>
                        <th>col 6</th>
                        <th>col 7</th>
                        <th>col 8</th>
                        <th>col 9</th>
                        <th>col 10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </dd>
</dl>
