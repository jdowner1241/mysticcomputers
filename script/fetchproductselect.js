
$(document).ready(function() {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Extract the value of the "id" parameter from the query string
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('product');

    // fetch the data from a json file
    fetch('./script/product.json')
    .then(function (response){
        return response.json();
    })
    .then(function (data)
    {
            
        // filter the selection json file
        var filteredData =0;
        // product="";
        for(var j=0; j<data.length; j++) 
        {
            if(data[j].Name == product)
            {
                filteredData = j;
            }
        }
            var i=filteredData;
            {
                $("#productname").text(data[i].name);
                $('#productimage').append($('<img>', { src: data[i].Image }));
                $("#productcost").text(data[i].Cost);
                $("#Brand").text(data[i].Brand);
                $("#Model").text(data[i].Model);
                $("#Screen_Size").text(data[i].Screen_Size);
                $("#Color").text(data[i].Color);
                $("#Storage").text(data[i].Storage);
                $("#CPU").text(data[i].CPU);
                $("#Memory").text(data[i].Memory);
                $("#OS").text(data[i].OS);
                $("#Processor").text(data[i].Technical_Details.Processor);
                $("#Chipset_Brand").text(data[i].Technical_Details.Chipset_Brand);
                $("#Graphics").text(data[i].Technical_Details.Graphics);
                $("#Graphics_Type").text(data[i].Technical_Details.Graphics_Type);
                $("#Video_Memory_Size").text(data[i].Technical_Details.Video_Memory_Size);
                $("#Memory_Size").text(data[i].Technical_Details.Memory_Size);
                $("#Memory_Speed").text(data[i].Technical_Details.Memory_Speed);
                $("#Memory_Type").text(data[i].Technical_Details.Memory_Type);
                $("#Display").text(data[i].Technical_Details.Display);
                $("#Max_Screen_Resolution").text(data[i].Technical_Details.Max_Screen_Resolution);
                $("#Storage_Size").text(data[i].Technical_Details.Storage_Size);
                $("#Storage_Type").text(data[i].Technical_Details.Storage_Type);
                $("#Storage_Feature").text(data[i].Technical_Details.Storage_Feature);
                $("#Operating_System").text(data[i].Technical_Details.Operating_System);
                $("#camera").text(data[i].Technical_Details.camera);
                $("#keyboard").text(data[i].Technical_Details.keyboard);
                $("#connectivity").text(data[i].Technical_Details.connectivity);
                $("#Special_Feature").text(data[i].Technical_Details.Special_Feature);
                $("#accessories").text(data[i].Technical_Details.accessories);
                $("#brand").text(data[i].Other_Details.brand);
                $("#series").text(data[i].Other_Details.series);
                $("#Item_model_number").text(data[i].Other_Details.Item_model_number);
                $("#Hardware_Platform").text(data[i].Other_Details.Hardware_Platform);
                $("#Item_Weight").text(data[i].Other_Details.Item_Weight);
                $("#Package_Dimensions").text(data[i].Other_Details.Package_Dimensions);
            }
        
    })
        .catch(function (err)
        {
            console.log(err);
        } );
});