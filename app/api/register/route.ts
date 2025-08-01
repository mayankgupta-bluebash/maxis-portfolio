import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Log the received data
    console.log('Received registration data:', formData);

    // Here you would typically:
    // 1. Validate the data
    // 2. Hash the password
    // 3. Store in database
    // 4. Send confirmation email
    // 5. Create user session

    // For now, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      data: {
        userId: 'user_' + Date.now(),
        email: formData.email,
        role: formData.role,
        plan: formData.selectedPlan,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Registration failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
