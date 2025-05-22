import React from 'react';

const FAQ = () => {
  return (
    <div class="container mx-auto mt-24">

        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div class="max-w-3xl mx-auto space-y-6">

            <div class="border rounded-lg p-6">
                <h3 class="text-xl font-medium mb-2">Can I change plans later?</h3>
                <p class="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>

            <div class="border rounded-lg p-6">
                <h3 class="text-xl font-medium mb-2">Do you offer annual billing?</h3>
                <p class="text-muted-foreground">Yes, we offer a 20% discount when you choose annual billing on any of our paid plans.</p>
            </div>

            <div class="border rounded-lg p-6">
                <h3 class="text-xl font-medium mb-2">Is there a free trial?</h3>
                <p class="text-muted-foreground">We offer a 14-day free trial on all paid plans. No credit card required to start.</p>
            </div>
        </div>
    </div>
  )
}

export default FAQ;
