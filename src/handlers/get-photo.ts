import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { getPhotoAfterProcess } from '../api/process-photo';

const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    try {
        console.log(`Run check-report-handler - ${JSON.stringify(event.body)}`);

        const photo = await getPhotoAfterProcess();
        console.log(`end check-report-handle`, event);

        return {
            statusCode: 200,
            body: JSON.stringify(photo),
        };
    } catch (error) {
        console.log(`Failed to run get-photo-handler - ${error}`, JSON.stringify(event.body));
        throw error;
    }
};

module.exports(handler);
