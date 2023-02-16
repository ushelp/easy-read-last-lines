// Type definitions for index.js
// Project: [https://github.com/ushelp/easy-read-last-lines] 
// Definitions by: Ray <inthinkcolor@gmail.com> 


declare namespace EasyReadLastLines{
		
	/**
	 * 
	 * @param filePath 
	 * @param maxLine 
	 * @param encoding 
	 * @return Promise 
	 */
	function readFromFile(filePath : any, maxLine : any, encoding : any): Promise;
    
    /**
     * 
     * @param filePath 
     * @param maxLine 
     * @param encoding 
     * @return Promise 
     */
    function readArrayFromFile(filePath : any, maxLine : any, encoding : any): Promise;
		
	/**
	 * 
	 * @param filePath 
	 * @param maxLine 
	 * @return Promise  
	 */
	function readBufferFromFile(filePath : any, maxLine : any): Promise;
    
    /**
     * 
     * @param text 
     * @param maxLine 
     * @return String 
     */
    function readFromText(text : any, maxLine : any): String;
    
    /**
     * 
     * @param text 
     * @param maxLine 
     * @return String 
     */
    function readArrayFromText(text : any, maxLine : any): Array;
        
    /**
     * 
     * @param text 
     * @return Array 
     */
    function linesToArray(text : any): Array;
}
