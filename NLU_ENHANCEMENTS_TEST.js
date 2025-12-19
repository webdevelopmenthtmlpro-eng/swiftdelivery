import { 
  preprocessMessage, 
  correctTypos, 
  generateSmartSuggestions,
  identifyIntents,
  extractEntities 
} from './swift-delivery-backend/utils/nluEnhancer.js';

console.log('🧪 SwiftDelivery NLU Enhancement Testing\n');
console.log('=' .repeat(60));

const testCases = [
  {
    name: 'Typo in tracking phrase',
    input: 'trck my pakage',
    expectedCorrection: 'track my package'
  },
  {
    name: 'Complex typo with tracking ID',
    input: 'where is my swft SWIFT-123456-ABC',
    expectedCorrection: 'where is my swift SWIFT-123456-ABC'
  },
  {
    name: 'Common casual typos',
    input: 'pls help me find my parcl',
    expectedCorrection: 'please help me find my parcel'
  },
  {
    name: 'Delivery status typo',
    input: 'what is my deliv staus',
    expectedCorrection: 'what is my delivery status'
  },
  {
    name: 'Shipping variation',
    input: 'how long for shpping to arrive',
    expectedCorrection: 'how long for shipping to arrive'
  },
  {
    name: 'Warehouse typo',
    input: 'can you store in warehous',
    expectedCorrection: 'can you store in warehouse'
  },
  {
    name: 'Complaint typo',
    input: 'my pakage is damged',
    expectedCorrection: 'my package is damaged'
  },
  {
    name: 'International shipping typo',
    input: 'intenatl shipment with custms clearance',
    expectedCorrection: 'international shipment with customs clearance'
  },
  {
    name: 'Tracking without typo',
    input: 'track my package SWIFT-1764838531166-A36MZ',
    expectedCorrection: 'track my package SWIFT-1764838531166-A36MZ'
  },
  {
    name: 'Temperature controlled typo',
    input: 'tempurature control needed for perish goods',
    expectedCorrection: 'temperature control needed for perishable goods'
  }
];

let passedTests = 0;
let totalTests = testCases.length;

console.log(`\n📋 Running ${totalTests} test cases...\n`);

testCases.forEach((test, index) => {
  console.log(`\n Test ${index + 1}: ${test.name}`);
  console.log(`  Input:    "${test.input}"`);
  
  const result = preprocessMessage(test.input);
  const corrected = result.corrected;
  
  console.log(`  Output:   "${corrected}"`);
  console.log(`  Expected: "${test.expectedCorrection}"`);
  
  const isMatch = corrected.toLowerCase() === test.expectedCorrection.toLowerCase();
  console.log(`  Status:   ${isMatch ? '✅ PASS' : '⚠️ PARTIAL'}`);
  
  if (result.typoCorrections && result.typoCorrections.length > 0) {
    console.log(`  Corrections: ${result.typoCorrections.map(c => `${c.original}→${c.correction}(${(c.confidence*100).toFixed(0)}%)`).join(', ')}`);
  }
  
  if (result.intents.length > 0) {
    console.log(`  Intents: ${result.intents.join(', ')}`);
  }
  
  if (result.suggestions && result.suggestions.length > 0) {
    console.log(`  Suggestions: ${result.suggestions.map(s => s.type).join(', ')}`);
  }
  
  if (isMatch) passedTests++;
});

console.log('\n' + '='.repeat(60));
console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed (${(passedTests/totalTests*100).toFixed(0)}%)\n`);

console.log('\n🎯 Smart Suggestion Examples:\n');

const suggestionExamples = [
  { 
    input: 'trck pakage',
    name: 'Typo correction suggestion'
  },
  {
    input: 'can you help me track',
    name: 'Missing info suggestion'
  },
  {
    input: 'my package is damaged',
    name: 'Complaint escalation suggestion'
  },
  {
    input: 'SWIFT-123456-ABC',
    name: 'Auto-track suggestion'
  },
  {
    input: 'international booking',
    name: 'Service info suggestion'
  }
];

suggestionExamples.forEach((example, idx) => {
  const result = preprocessMessage(example.input);
  console.log(`\n${idx + 1}. ${example.name}`);
  console.log(`   Input: "${example.input}"`);
  console.log(`   Corrected: "${result.corrected}"`);
  if (result.suggestions.length > 0) {
    result.suggestions.forEach(s => {
      console.log(`   💡 ${s.message}`);
    });
  } else {
    console.log(`   (No suggestions generated)`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('\n✨ NLU Enhancement Test Complete!\n');
