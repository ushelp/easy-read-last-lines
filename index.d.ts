// Type definitions for index.js
// Project: [https://github.com/ushelp/easy-read-last-lines] 
// Definitions by: Ray <inthinkcolor@gmail.com> 


declare namespace EasyReadLastLines{
		
	/**
	 * 
	 * @param filePath 
	 * @param maxLine 
	 * @param encoding 
	 * @return  
	 */
	function read(filePath : any, maxLine : any, encoding : any): Promise;
		
	/**
	 * 
	 * @param filePath 
	 * @param maxLine 
	 * @return  
	 */
	function readBuffer(filePath : any, maxLine : any): Promise;
}
