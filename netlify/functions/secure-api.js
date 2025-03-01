const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    const { userInput } = JSON.parse(event.body);

    // Validate input
    if (!userInput || typeof userInput !== "string" || userInput.length > 100) {
        return { statusCode: 400, body: JSON.stringify({ error: "Invalid input" }) };
    }

    try {
        // Query Supabase securely (Prevents SQL Injection)
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('name', userInput); // Uses a parameterized filter

        if (error) throw error;

        return { 
            statusCode: 200, 
            body: JSON.stringify({ message: data.length ? "User found!" : "User not found!" }) 
        };
    } catch (error) {
        console.error("Database error:", error);
        return { statusCode: 500, body: JSON.stringify({ error: "Database query failed" }) };
    }
};
