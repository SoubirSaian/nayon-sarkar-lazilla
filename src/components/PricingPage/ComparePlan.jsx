import React from 'react';

const ComparePlan = () => {
  return (
      <div class="container mx-auto mt-24">

        <h2 class="text-3xl font-bold text-center mb-12">Compare Plans</h2>

        <div class="overflow-x-auto">

            <table class="w-full border-collapse">

                <thead>
                    <tr class="border-b">
                        <th class="text-left py-4 px-6 font-medium">Features</th>
                        <th class="text-center py-4 px-6 font-medium">Free</th>
                        <th class="text-center py-4 px-6 font-medium text-blue-600">Pro</th>
                        <th class="text-center py-4 px-6 font-medium">Enterprise</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr class="border-b">
                        <td class="py-4 px-6">Projects</td>
                        <td class="text-center py-4 px-6">3</td>
                        <td class="text-center py-4 px-6 bg-blue-50">Unlimited</td>
                        <td class="text-center py-4 px-6">Unlimited</td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-4 px-6">Team Members</td>
                        <td class="text-center py-4 px-6">1</td>
                        <td class="text-center py-4 px-6 bg-blue-50">10</td>
                        <td class="text-center py-4 px-6">Unlimited</td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-4 px-6">Support</td>
                        <td class="text-center py-4 px-6">Email</td>
                        <td class="text-center py-4 px-6 bg-blue-50">Priority Email</td>
                        <td class="text-center py-4 px-6">24/7 Phone &amp; Email</td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-4 px-6">Analytics</td>
                        <td class="text-center py-4 px-6">Basic</td>
                        <td class="text-center py-4 px-6 bg-blue-50">Advanced</td>
                        <td class="text-center py-4 px-6">Custom</td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-4 px-6">API Access</td>
                        <td class="text-center py-4 px-6">—</td>
                        <td class="text-center py-4 px-6 bg-blue-50">✓</td>
                        <td class="text-center py-4 px-6">✓</td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-4 px-6">Custom Integrations</td>
                        <td class="text-center py-4 px-6">—</td>
                        <td class="text-center py-4 px-6 bg-blue-50">3</td>
                        <td class="text-center py-4 px-6">Unlimited</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ComparePlan;
