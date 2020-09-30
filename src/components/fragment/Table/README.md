## DersureTable - Datatables built on Bootstrap
DersureTable is a responsive datatables component buiit on Bootstrap front-end framework. It comes with features like filtering, search, export to Excel Spreadsheet download, printing, selectable rows, pagination, and sorting. With the ability to customize styling on most views, there are two responsive modes, "standard", and "simple" for mobile/tablet devices.

## Tables of contents
* Install
* Usage
* API
* Customize Columns
* Remote Data
* Todo List

## Install
Locally hosted, so is already in our project.

## Usage
For a simple table:
```json
import DersureTable from '../fragment/Table';

const columns = ["First Name", "Last Name", "Company", "City", "State"];

const data = [
    ["Andrew", "Abu", "Belimpex Limited", "Ikeja", "Lagos"],
    ["Niyi", "Adeyemi", "Belpapyrus Limited", "Ikeja", "Lagos"],
    ["Gift", "Onwochei", "Starcy Pharmacy", "Orhuwhorun", "Delta"],
    ["Nathaniel", "Kolawole", "Boulos Enterprise Limited", "Ikeja", "Lagos"],
    ["Glory", "Awark", "Dangote Cement", "Lekki", "Lagos"],
];

export const options = {
    filter: true,
    sort: true,
    searching: true,
};

<DersureTable
    title="Product Reviews"
    columns={columns}
    data={data}
    options={options}
/>
```
Or customize columns
```json
import DersureTable from '../fragment/Table';

const columns = [
    {
        name: 'fname',
        label: 'First Name',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: 'lname',
        label: 'Last Name',
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: 'company',
        label: 'Company',
        options: {
            filter: false,
            sort: false,
        }
    },
    {
        name: 'city',
        label: 'City',
        options: {
            filter: false,
            sort: false,
        }
    },                
    {
        name: 'state',
        label: 'State',
        options: {
            filter: true,
            sort: true,
        }
    },
];

const data = [
    { fname: "Andrew", lname: "Abu", company: "Belimpex Limited", city: "Ikeja", state: "Lagos"},
    { fname: "Niyi", lname: "Adeyemi", company: "Belpapyrus Limited", city: "Ikeja", state: "Lagos"},
    { fname: "Gift", lname: "Onwochei", company: "Starcy Pharmacy", city: "Orhuwhorun", state: "Delta"},
    { fname: "Nathaniel", lname: "Kolawole", company: "Boulos Enterprise Limited", city: "Ikeja", state: "Lagos"},
    { fname: "Glory", lname: "Awark", company: "Dangote Cement", city: "Lekki", state: "Lagos"},
];

export const options = { filter: true, sort: true, searching: true, };

const columnDefs = [
    {
        render: ( data, type, row ) => {
            console.log(type, row)
            return <Rating rate={data} />
        },
        targets: [3]
    },                
    {
        render: text => truncate( text, { length: 50, separator: /,? +/ } ),
        targets: [4]
    },
    {
        sort: false,
        targets: [0, 4]
    },
    {
        visible: false,
        targets: 5
    },          
];

<DersureTable
    title="Product Reviews"
    columns={columns}
    data={data}
    options={options}
    columnDefs={columnDefs}
/>
```

## API
`<DersureTable />`

The component accepts the following props:

Name | Type | Description
---- | ---- | -----------
`title` | string | Title use to caption table
`columns` | array | Columns used to describe table. Must be either an array of simple strings or objects describing a column
`data` | array | Data used to describe table. Must be either an array containing objects of key/value pairs with values that are strings or numbers, or arrays of strings or numbers (Ex: data: [{"Name": "Joe", "Job Title": "Plumber", "Age": 30}, {"Name": "Jane", "Job Title": "Electrician", "Age": 45}] or data:[["Joe", "Plumber", 30], ["Jane", "Electrician", 45]]). The **render** option can be used to control the data display.
`options` | object | Options used to describe table
`columnDefs` | array | Options used to describe table. Very similar to `columns.options`, this props allows for specific options to columns in the table, although in this case the column options defined can be applied to one or more columns. Additionally, not every column need to be specified, unlike `columns.options`. This parameter is an array of column definition objects, where the options available exactly match those for `columns.options`. In addition to the column property options, `columnDefs` requires a `targets` property to be set in each definition object. This `targets` property tells DersureTable which column(s) the definition should be applied to. A property defines in `columns.options` will take priority over any value for that property defined in `columnDefs`. Properties which are higher in the `columnDefs` option array will take priority over those below.

### Options
Name | Type | Default | Description
---- | ---- | ------- | -----------
`create` | booleen | false | Enable/disable creatable link.
`createOptions` | object |  | An object of options to define create button.
`columnOrder` | array |    | An array of numbers (column indices) indicating the order the columns should be displayed in. Defaults to the order provided by the Columns prop. This option is useful if you would like certain columns to swap positions (see draggableColumns option).
`customRowRender` | function |  | Override default row rendering with custom function. `customRowRender(data, dataIndex, rowIndex) => React Component`
`customStackRender` | function |  | Override default stack rendering with custom function. `customStackRender(data, dataIndex, rowIndex) => React Component`
`download` | booleen | true | Show/hide download icon from toolbar
`downloadOptions` | object | see -> | An object of options to change the output of the downloaded file: `buttonText`: string, `filename`: string, `filterOptions`: object; `useDisplayedColumnsOnly`: boolean and `useDisplayedRowsOnly`: boolean. Default Value: `{buttonText: 'Export', filename: 'Table Title'}`
`filter` | booleen | true | Show/hide filter icon from toolbar.
`filterType` | string |  | Choice of filtering view. enum('checkbox', 'dropdown', 'multiselect', 'textField', 'custom')
`isRowSelectable` | function |  | Enable/disable selection on certain rows with custom function. Returns true if not provided. `function(dataIndex: number, selectedRows: object(lookup: {dataindex: boolean}, data: arrayOfObjects: {index, dataIndex})) => boolean`.
`jumpToPage` | booleen | false | When true, this option adds a dropdown to the table's footer that allows a user to navigate to a specific page.
`onDownload` | function |  | A callback function that triggers when the user downloads the CSV file. In the callback, you can control what is written to the CSV file. This method can be used to add the Excel specific BOM character. function(buildHead: (columns) => string, buildBody: (data) => string, columns, data) => string. Return false to cancel download of file.
`onRowClick` | function |  | Callback function that triggers when a row is clicked. `function(rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => void`
`onRowsDelete` | function |  | Callback function that triggers when row(s) are deleted. function(rowsDeleted: object(lookup: {[dataIndex]: boolean}, data: arrayOfObjects: {index: number, dataIndex: number}), newTableData) => void OR false (Returning false prevents row deletion.)
`print` | booleen | false | Show/hide print icon from toolbar.
`pagination` | booleen | true | Enable/disable pagination.
`page` | number | 1 | User provided page for pagination.
`rowsPerPage` | number | 10 | Numbers of rows allowed per page.
`rowsPerPageOptions` | array | [5, 10, 15, 25, 50] | Options to provide in pagination for number of rows a user can select.
`rowHover` | booleen | false | Enable/disable hover style over rows.
`responsive` | string | 'stacked' | Enable/disable responsive table views. Options: * "vertical" (default value): In smaller views the table cells will collapse such that the heading is to the left of the cell value. * "standard": Table will stay in the standard mode but make small changes to better fit the allocated space * "simple": On very small devices the table rows will collapse into simple display.
`search` | booleen | true | Show/hide search icon from toolbar.
`select` | booleen | false | Indicates if rows can be selected.
`setRowProps` | function |  | Is called for each row and allows you to return custom props for this row based on its data. function(row: array, dataIndex: number, rowIndex: number) => object
`sort` | booleen | true | Enable/disable sort on all columns.
`sortFilterList` | booleen | true | Enable/disable alphanumeric sorting of filter lists.
`sortOrder` | object | {} | Sets the column to sort by and its sort direction. To remove/reset sorting, input in an empty object. The object options are the column name and the direction: name: string, direction: enum('asc', 'desc')

## Customize Columns
On each column object, you have the ability to customize columns to your liking with the 'options' property. Example:
```
const columns2 = [
    { 
        name: 'date',
        label: 'Date',
        options: {
            filterable: false,
            sortable: true,
        }
    },
    ...
];
```
In addition to the column property options, `columnDefs` can also be used to customize columns. Example:
```
const columnDefs = [
    {
        sortable: false,
        filterable: false,
        visible: false,
        render: ( data, rowIndex ) => <Rating rate={data} />,
        targets: [3]
    },                
    ...          
];
```
###
Name | Type | Description
---- | ---- | -----------
`name` | string | Name of column (This field is required)
`label` | string | Column Header Name override
`options` | object | Options for customizing column

### Column Options
Name | Type | Default | Description
---- | ---- | ------- | -----------
`render` | function |  | Function that returns a string or React component. Used to display data within all table cells of a given column. `function(cellData, data, rowIndex) => string`|`React Component`
`visible` | booleen | true | Display column in table. Possible values: true: Column is visible and toggleable via the View Columns popover in the Toolbar. AND false: Column is not visible but can be made visible via the View Columns popover in the Toolbar.
`downloadable` | booleen | true | Display column in EXCEL download file.
`empty` | booleen | false | This denotes whether the column has data or not (for use with intentionally empty columns).
`filterable` | booleen | false | Display column in filter list.
`filterList` | array |  | Filter value list Example
`filterOptions` | object |  | These options affect the filter display and functionality from the filter dialog. This option is an object of several options for customizing the filter display and how filtering works.
`filterType` | string | 'dropdown' | Choice of filtering view. Takes priority over global filterType option.`enum('checkbox', 'dropdown', 'multiselect', 'textField', 'custom')` Use 'custom' if you are supplying your own rendering via filterOptions.
`hintable` | string |  | Display hint icon with string as tooltip on hover.
`printable` | booleen | true | Display column when printing.
`searchable` | booleen | true | Exclude/include column from search results.
`setCellHeaderProps` | function |  | Is called for each header cell and allows you to return custom props for the header cell based on its data. `function(columnMeta: object) => object`
`shadow` | boolean | false | Shadow effect applied to component.
`setCellProps` | function |  | Is called for each cell and allows to you return custom props for this cell based on its data. `function(cellValue: string, rowIndex: number, columnIndex: number) => object`
`sortable` | booleen | true | Enable/disable sorting on column.
`viewColumns` | booleen | true | Allow user to toggle column visibility through 'View Column' list.

## Customize Styling

## Remote Data
If you are looking to work with remote data sets or handle pagination, filtering, and sorting on a remote server you can do that with the following options:
```json
const options = {
    serverSide: true,
    onTableChange: (action, tableState) => {
        this.xhrRequest('my.api.com/tableData', result => {
            this.setState({ data: result });
        });
    }
};
```

## Tables of contents
* Customize Styling
* Expandable Rows
* Clickable Rows
* Column Visibility options
* serverSide; Enable remote data source.