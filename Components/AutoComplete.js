import React from 'react';

import '../Styles/AutoCompleteStyle.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { Spinner} from 'react-bootstrap';
import { Typeahead, ClearButton } from 'react-bootstrap-typeahead';
import options from './Planguages';

const BasicExample = () => {
  return (
    <Typeahead
    className='typehead'
    id="basic-typeahead-single"
    options={options}
    placeholder="Choose a Language........">
    {({ onClear, selected }) => (
            <div className="rbt-aux">
                {!!selected.length && <ClearButton onClick={onClear} size="lg" className='clear'/>}
                
            </div>
    )}
    </Typeahead> 
      
    );
  };

export default BasicExample;

